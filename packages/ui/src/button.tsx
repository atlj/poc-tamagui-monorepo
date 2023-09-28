import { styled , Button as TMButton, GetProps} from "tamagui";

export const Button = styled(TMButton , {
  backgroundColor: "#2f80ed",
  }
)

export type ButtonProps = GetProps<typeof Button>;
