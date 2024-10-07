import { FC, useEffect, useState } from "react";
import Skeleton from "./Skeleton";

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: FC<MapProps> = ({ latitude, longitude }) => {
  const [loading, setLoading] = useState(true);
  const mapSrc = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

  const mapStyles = {
    height: "270px",
    width: "360px",
    border: "0",
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [latitude, longitude]);

  return (
    <div style={{ position: "relative" }}>
      {loading && <Skeleton width="360px" height="270px" />}
      {!loading && (
        <iframe
          src={mapSrc}
          style={mapStyles}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default Map;
