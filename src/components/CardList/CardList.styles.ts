import { styled } from "../../assets/theme";

export const CardListWrapper = styled("div")(({ theme }) => {
  return {
    ...theme.mixins.genericFlex,
    width: "100%",
    height: "fit-content",
    flexDirection: "row",
    flexWrap: "wrap",
  };
});
