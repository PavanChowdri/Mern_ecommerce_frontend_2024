import { SerializedError } from "@reduxjs/toolkit";
import { MessageResponse } from "../types/api-types";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { NavigateFunction } from "react-router-dom";
import toast from "react-hot-toast";
import moment from "moment";

type ResType =
  | {
      data: MessageResponse;
    }
  | {
      error: FetchBaseQueryError | SerializedError;
    };

export const responseToast = (
  res: ResType,
  navigate: NavigateFunction | null,
  url: string
) => {
  if ("data" in res) {
    toast.success(res.data.message);
    if (navigate) navigate(url);
  } else {
    const error = res.error as FetchBaseQueryError;
    const MessageResponse = error.data as MessageResponse;
    toast.error(MessageResponse.message);
  }
};

export const getLastMonths = () => {
  const currentDate = moment();

  currentDate.date(1);

  const lastSixMonths: string[] = [];
  const lastTweleveMonths: string[] = [];

  for (let i = 0; i < 6; i++) {
    const monthDate = currentDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    lastSixMonths.unshift(monthName);
  }
  for (let i = 0; i < 12; i++) {
    const monthDate = currentDate.clone().subtract(i, "months");
    const monthName = monthDate.format("MMMM");
    lastTweleveMonths.unshift(monthName);
  }

  return {
    lastSixMonths,
    lastTweleveMonths,
  };
};
