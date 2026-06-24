import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

export default function FilteredNotifications() {
  const [type, setType] = useState("Event");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    const res = await getNotifications(1, 10, type);
    setData(res);
  };

  return (
    <div>
      <h2>Filtered Notifications</h2>

      <select onChange={(e) => setType(e.target.value)}>
        <option value="Event">Event</option>
        <option value="Result">Result</option>
        <option value="Placement">Placement</option>
      </select>

      {data.map((item, i) => (
        <NotificationCard key={i} item={item} />
      ))}
    </div>
  );
}