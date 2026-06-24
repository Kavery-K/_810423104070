import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    try {
      const res = await getNotifications(page, limit);
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h2>All Notifications</h2>

      {data.map((item, i) => (
        <NotificationCard key={i} item={item} />
      ))}

      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </button>

      <button onClick={() => setPage(page + 1)}>
        Next
      </button>
    </div>
  );
}