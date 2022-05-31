import { createGlobalState } from "react-hooks-global-state";
const { setGlobalState, useGlobalState } = createGlobalState({
  isActive: false,
  needToPay: false,
  title: "Alexand Ioan Cuza University of Iasi",
  selectedSpace: "4C",
  checkInTime: "00:00",
  duration: 0,
  checkOutTime: "00:00",
  price: 5,
});
export { setGlobalState, useGlobalState };
