import { useEffect, useState } from "react";

const useServices = () => {
   const [services, setServices] = useState([]);
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then(data => {
        setServices(data)
        setLoading(false)
      })


      .catch((err) => console.log(err));
  }, []);

  return {services, loading}
}



export default useServices;