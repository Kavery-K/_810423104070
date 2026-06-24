import AllNotifications from "./pages/AllNotifications";
import FilteredNotifications from "./pages/FilteredNotifications";

export default function App() {
  return (
    <div>
      <h1>Campus Notifications App</h1>

      <AllNotifications />

      <hr />

      <FilteredNotifications />
    </div>
  );
}