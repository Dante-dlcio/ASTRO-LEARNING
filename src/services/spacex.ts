import { type Doc, type APISpaceXResponse } from "../types/api";

export const getLatestLaunches = async ({id}: {id: string}) => {
    const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: {},
    options: {
      sort: {
        date_unix: "asc",
      },
      limit: 12,
    },
  }),
});
const { docs: launches } = (await res.json()) as APISpaceXResponse;
return launches
}