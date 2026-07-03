"use client"

import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix Leaflet marker icon default image resolution in Next.js
if (typeof window !== "undefined") {
  delete (L.Icon.Default.prototype as any)._getIconUrl

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  })
}

const position: [number, number] = [9.710341192412127, 77.17593831999096]

// Helper component to bind click handlers to the map container using useMapEvents
function MapClickRedirect() {
  useMapEvents({
    click: () => {
      window.open(
        `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
        "_blank"
      )
    },
  })
  return null
}

export default function MapComponent() {
  return (
    <MapContainer
      center={position}
      zoom={14}
      scrollWheelZoom={false}
      className="w-full h-full min-h-[250px] rounded-[18px] z-0 cursor-pointer"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapClickRedirect />
      <Marker
        position={position}
        eventHandlers={{
          click: (e) => {
            // Prevent event from bubbling up to MapContainer handler
            L.DomEvent.stopPropagation(e)
            window.open(
              `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`,
              "_blank"
            )
          },
        }}
      >
        <Popup>
          <div className="text-center font-sans">
            <strong className="text-sm text-[#173f23]">Spizespices Headquarters</strong>
            <p className="text-xs text-[#203020]/70 mt-1 font-semibold">Click to navigate on Google Maps</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}
