import type {Route} from "./+types/route";

export const action = () => {};

export const loader = async ({context, params, request}: Route.ActionArgs) => {
  return {};
};

export default function Users(props: Route.ComponentProps) {
  return <div></div>;
}
