import { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import type { Negocio } from '../../types/negocio';
import { BusinessMarkerPopup } from './BusinessMarkerPopup';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface MapViewProps {
  negocios: Negocio[];
  selectedNegocioId?: number | null;
  onSelect: (negocio: Negocio) => void;
}

const defaultPosition: [number, number] = [-0.9, -78.95];

function MapFocus({ negocio }: { negocio?: Negocio }) {
  const map = useMap();

  useEffect(() => {
    if (negocio) {
      map.flyTo([negocio.latitud, negocio.longitud], 15, {
        duration: 1.2,
      });
    }
  }, [map, negocio]);

  return null;
}

export function MapView({ negocios, selectedNegocioId, onSelect }: MapViewProps) {
  const selectedNegocio = negocios.find((negocio) => negocio.id === selectedNegocioId);
  const markerRefs = useRef<Record<number, L.Marker | null>>({});

  useEffect(() => {
    if (selectedNegocioId && markerRefs.current[selectedNegocioId]) {
      markerRefs.current[selectedNegocioId]?.openPopup();
    }
  }, [selectedNegocioId]);

  return (
    <MapContainer
      center={defaultPosition}
      zoom={13}
      scrollWheelZoom={false}
      className="h-[520px] w-full rounded-3xl shadow-xl"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
      />
      {negocios.map((negocio) => (
        <Marker
          key={negocio.id}
          position={[negocio.latitud, negocio.longitud]}
          eventHandlers={{
            click: () => onSelect(negocio),
          }}
          ref={(ref) => {
            markerRefs.current[negocio.id] = ref;
          }}
        >
          <Popup>
            <BusinessMarkerPopup negocio={negocio} />
          </Popup>
        </Marker>
      ))}
      <MapFocus negocio={selectedNegocio} />
    </MapContainer>
  );
}
