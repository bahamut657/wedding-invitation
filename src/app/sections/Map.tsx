type MapProps = {
  url: string
}
const Map = ({ url }: MapProps) => <div className="section flex h-full flex-col grow">
  <div className="map flex-1 grow">
    <iframe
      src={url}
      width="100%"
      height="300px"
      style={{ "border": 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

export default Map;