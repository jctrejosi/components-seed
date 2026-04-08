import { useMemo } from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import styles from './styles.module.css'
import type { MapAntliaProps } from './types'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'

const mapContainerStyle = {
  width: '100%',
  height: '100%',
}

const MapApiContent = ({
  apiKey,
  address,
  logoUrl,
}: {
  apiKey: string
  address: string
  logoUrl?: string
}) => {
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
  )
}

export const MapAntlia = ({
  apiKey = '',
  address = 'asd asd asd',
  phone = '132412',
  email = 'mail',
  imageUrl = '',
  height = '420px',
  onOpenMaps,
  style,
}: MapAntliaProps) => {
  const mapsUrl = useMemo(
    () =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        address
      )}`,
    [address]
  )

  const showImage = Boolean(imageUrl)

  return (
    <section className={styles.container} style={style}>
      <div className={styles.info}>
        <h2 className={styles.title}>
          {returnTranslation(translationsSources.contact_title)}
        </h2>

        {address && (
          <div className={styles.item}>
            <FaMapMarkerAlt />
            <span>{address}</span>
          </div>
        )}

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

        <a
          className={styles.mapsButton}
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {returnTranslation(translationsSources.map_open_in_google_maps)}
        </a>

        {onOpenMaps && (
          <button className={styles.secondaryButton} onClick={onOpenMaps}>
            {returnTranslation(translationsSources.map_open_in_google_maps)}
          </button>
        )}
      </div>

      <div className={styles.mapWrapper} style={{ height }}>
        {showImage ? (
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapLink}
          >
            <img src={imageUrl} alt={address} className={styles.mapImage} />
          </a>
        ) : (
          <MapApiContent apiKey={apiKey} address={address} logoUrl={mapsUrl} />
        )}
      </div>
    </section>
  )
}
