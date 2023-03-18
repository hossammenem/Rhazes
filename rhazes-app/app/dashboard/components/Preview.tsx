import { TeamDiv, ResultsDiv } from "../../components/Schedule";
import { matchAtom } from "../store";
import { useAtom } from "jotai";

export default function Preview() {
  const [state] = useAtom(matchAtom);
  const MatchRes = "".concat(state.ourRes, ":", state.OppRes);
  return (
    <section>
      <h1 className="title-underline mx-auto my-10 w-fit text-center text-3xl">
        Preview
      </h1>

      <div className="flex flex-col items-center justify-center gap-6 p-4 lg:flex-row">
        <TeamDiv
          logo="logo"
          alt="Rhazes E-sports logo"
          name="Rhazes E-sports"
        />
        <ResultsDiv
          date={state.date}
          matchResults={MatchRes}
          tournament={state.tournament}
          matchType={state.matchType}
        />
        <TeamDiv
          logo="{match.OppLogo}"
          alt={state.OppName}
          name={state.OppName}
        />
      </div>
    </section>
  );
}
