import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import styles from './styles.module.css'
import type { MapAntliaProps } from './types'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

export const MapAntlia = ({
  apiKey,
  address,
  phone,
  email,
  logoUrl,
  height = '420px',
  onOpenMaps,
}: MapAntliaProps) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
  })

  const center = { lat: 0, lng: 0 }

  const onLoad = (map: google.maps.Map) => {
    const geocoder = new google.maps.Geocoder()

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location

        map.setCenter(location)

        new google.maps.Marker({
          map,
          position: location,
          icon: logoUrl
            ? {
                url: logoUrl,
                scaledSize: new google.maps.Size(48, 48),
              }
            : undefined,
        })
      }
    })
  }

  if (!isLoaded) {
    return (
      <div className={styles.loading}>
        {returnTranslation(translationsSources.map_loading)}
      </div>
    )
  }

  return (
    <section className={styles.container}>
      {/* izquierda */}
      <div className={styles.info}>
        <h2 className={styles.title}>
          {returnTranslation(translationsSources.contact_title)}
        </h2>

        <div className={styles.item}>
          <FaMapMarkerAlt />
          <span>{address}</span>
        </div>

        {phone && (
          <div className={styles.item}>
            <FaPhoneAlt />
            <span>{phone}</span>
          </div>
        )}

        {email && (
          <div className={styles.item}>
            <FaEnvelope />
            <span>{email}</span>
          </div>
        )}

        {onOpenMaps && (
          <button className={styles.mapsButton} onClick={onOpenMaps}>
            {returnTranslation(translationsSources.map_open_in_google_maps)}
          </button>
        )}
      </div>

      {/* derecha */}
      <div className={styles.mapWrapper} style={{ height }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          options={{
            disableDefaultUI: true,
            zoomControl: true,
          }}
        />
      </div>
    </section>
  )
}
