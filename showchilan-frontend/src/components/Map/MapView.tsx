import { useEffect, useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import type { Negocio } from '../../types/negocio';
import { BusinessMarkerPopup } from './BusinessMarkerPopup';

interface MapViewProps {
  negocios: Negocio[];
  selectedNegocioId?: number | null;
  onSelect: (negocio: Negocio) => void;
}

const defaultPosition: [number, number] = [-0.9, -78.95];

const showchilanIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="48" viewBox="0 0 36 48" fill="none">
        <path d="M18 47.5S3 30.2 3 18A15 15 0 1 1 33 18c0 12.2-15 29.5-15 29.5Z" fill="#1f8ea4" stroke="#0f2748" stroke-width="2"/>
        <circle cx="18" cy="18" r="6.5" fill="#f5efe6" stroke="#0f2748" stroke-width="2"/>
      </svg>`,
    ),
  iconSize: [36, 48],
  iconAnchor: [18, 48],
  popupAnchor: [0, -44],
});

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
          icon={showchilanIcon}
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
