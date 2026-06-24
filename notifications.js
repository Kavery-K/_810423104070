export const getNotifications = async (page = 1, limit = 10, type) => {
  let url = `http://4.224.186.213/evaluation-service/notifications?page=${page}&limit=${limit}`;

  if (type) {
    url += `&notification_type=${type}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};