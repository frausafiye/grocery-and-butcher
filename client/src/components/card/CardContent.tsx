import { default as CardContentMUI } from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type DescType = { desc: string };
type ShortDescText = DescType & {
  isShortDesc: true;
  isLongDesc?: never;
};
type LongDescText = DescType & {
  isLongDesc: true;
  isShortDesc?: never;
};
type CardProps = ShortDescText | LongDescText;

export default function CardComponent({
  isShortDesc,
  isLongDesc,
  desc,
}: CardProps) {
  return (
    <CardContentMUI style={{ borderColor: "pink" }}>
      {isShortDesc ? (
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      ) : isLongDesc ? (
        <>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph> {desc}</Typography>
        </>
      ) : null}
    </CardContentMUI>
  );
}
