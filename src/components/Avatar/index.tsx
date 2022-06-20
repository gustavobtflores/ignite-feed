import styles from "./style.module.scss";

interface AvatarProps {
  image: string;
  hasBorder?: boolean;
}

export function Avatar({ image, hasBorder = true }: AvatarProps) {
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={image} />;
}
