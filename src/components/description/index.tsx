import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Typography } from "../typography";

type LinkData = {
  label: string;
  to: string;
};

type DescriptionProps = {
  title: React.ReactNode;
  content: string;
  linksData?: LinkData[];
};

export const Description: React.FC<DescriptionProps> = ({
  title,
  content,
  linksData,
}) => {
  return (
    <div>
      <Typography renderAs="h1">{title}</Typography>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Typography as="p">{content}</Typography>
      </motion.div>
      <ul>
        {linksData?.map(({ label, to }) => (
          <li>
            <Typography key={to} as={Link} to={to}>
              {label}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};
