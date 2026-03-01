import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import styles from './styles.module.css'
import { type MapAndromedaProps } from './types'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'

const containerStyle = {
  width: '100%',
  height: '100%',
}

export const MapAndromeda = (props: MapAndromedaProps) => {
  const {
    address,
    apiKey,
    logoUrl,
    height = '400px',
    width = '100%',
    onButtonClick,
  } = props

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  })

  const center = { lat: 0, lng: 0 }

  const onLoad = (map: google.maps.Map) => {
    const geocoder = new google.maps.Geocoder()
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK' && results && results[0]) {
        const location = results[0].geometry.location
        map.setCenter(location)

        // Crear marcador con logo personalizado
        new google.maps.Marker({
          map,
          position: location,
          icon: logoUrl
            ? {
                url: logoUrl,
                scaledSize: new google.maps.Size(50, 50),
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
    <div className={styles.mapContainer} style={{ height, width }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
        }}
      />
      {onButtonClick && (
        <button
          className={styles.openInMapsButton}
          onClick={onButtonClick}
          aria-label={returnTranslation(
            translationsSources.map_open_in_google_maps
          )}
        >
          {returnTranslation(translationsSources.map_open_in_google_maps)}
        </button>
      )}
    </div>
  )
}
