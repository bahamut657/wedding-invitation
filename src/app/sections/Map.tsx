import dictionary from "../../dictionary.json"

const Map = () => <div className="section flex h-full flex-col grow">
  <div className="map flex-1 grow">
    <iframe
      src={dictionary.weddingInfo.cerimony.gmapURL}
      width="100%"
      height="300px"
      style={{ "border": 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
</div>

export default Map;