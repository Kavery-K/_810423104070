import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function NotificationCard({ item }) {
  return (
    <Card style={{ margin: 10, padding: 10 }}>
      <CardContent>
        <Typography variant="h6">
          {item.title}
        </Typography>

        <Typography variant="body2">
          {item.message}
        </Typography>

        <Typography variant="caption">
          Type: {item.notification_type}
        </Typography>
      </CardContent>
    </Card>
  );
}