import useLang from "../Hooks/useLang";
import Image from "next/legacy/image";
import { gql, useQuery } from "@apollo/client";
import LoadingSpinner from "./LoadingSpinner";

export type matchType = "Bo1" | "Bo3" | "Bo5";

export interface ITeam {
  logo: string;
  alt: string;
  name: string;
}

export interface IResult {
  matchResults: string;
  date: string;
  tournament: string;
  matchType: matchType;
}

export interface IMatch extends IResult {
  OppName: string;
  OppLogo: string;
}

const latestMatches = gql`
  query ExampleQuery {
    latestMatches {
      OppLogo
      OppName
      date
      matchResults
      matchType
      tournament
    }
  }
`;

export default function Schedule() {
  const lang = useLang();
  const { data, loading, error } = useQuery(latestMatches);

  if (error) {
    return (
      <>
        <h1
          className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white"
          id="schedule-section"
        >
          {lang.scheduleTitle}
        </h1>
        <div className="py-32 text-center text-2xl font-bold">
          An Unexpected Error Happend
        </div>
      </>
    );
  }
  if (loading) {
    return (
      <>
        <h1
          className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white"
          id="schedule-section"
        >
          {lang.scheduleTitle}
        </h1>
        <div className="py-32">
          <LoadingSpinner />
        </div>
      </>
    );
  }

  if (data && data.latestMatches.length === 0) {
    return (
      <>
        <h1
          className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white"
          id="schedule-section"
        >
          {lang.scheduleTitle}
        </h1>
        <div className="py-32 text-center text-2xl font-bold">
          {lang.emptySchedule}
        </div>
      </>
    );
  }
  return (
    <section className="min-h-[50vh] w-screen" id="schedule-section">
      <h1 className="title-underline mx-auto w-72 pt-6 text-center text-4xl font-bold text-white">
        {lang.scheduleTitle}
      </h1>

      {data.latestMatches.map((match: IMatch, index: React.Key) => (
        <div
          className="flex flex-col items-center justify-center gap-6 p-6 lg:flex-row"
          key={index}
        >
          <TeamDiv
            logo="logo"
            alt="Rhazes E-sports logo"
            name="Rhazes E-sports"
          />

          <ResultsDiv
            date={match.date}
            matchResults={match.matchResults}
            tournament={match.tournament}
            matchType={match.matchType}
          />

          <TeamDiv
            logo={match.OppLogo}
            alt={match.OppName}
            name={match.OppName}
          />
        </div>
      ))}
    </section>
  );
}

export const TeamDiv = (props: ITeam) => {
  return (
    <div
      className="button grid h-32 w-96 grid-cols-8 xs:w-80"
      style={{ "--border-width": "0.1em" } as React.CSSProperties}
    >
      <div className="col-[1/4]">
        <Image
          src={`/imgs/${props.logo}.png`}
          alt={props.alt}
          objectFit={"cover"}
          quality={100}
          width={128}
          height={128}
        />
      </div>
      <h1 className="col-[4/-1] my-auto text-2xl font-bold text-white">
        {props.name}
      </h1>
    </div>
  );
};

const formatDate = (date: string) => {
  let formattedDate;
  const FORMAT = {
    day: "numeric" as "numeric",
    month: "long" as "long",
    year: "numeric" as "numeric",
    hour12: true,
    hour: "2-digit" as "2-digit",
    minute: "numeric" as "numeric",
  };

  try {
    formattedDate = new Intl.DateTimeFormat("en-GB", FORMAT).format(
      new Date(date)
    );
  } catch (error) {
    formattedDate = new Intl.DateTimeFormat("en-GB", FORMAT).format(
      new Date(parseInt(date, 10))
    );
  }

  return formattedDate;
};

export const ResultsDiv = (props: IResult) => {
  return (
    <div className="h-32 w-56 bg-black">
      <div className="my-auto flex h-full flex-col items-center justify-center space-y-1 border-x-2 border-x-green-100">
        <p className="text-3xl font-bold text-white">{props.matchResults}</p>
        <p className="text-sm text-white">{props.matchType}</p>
        <p className="text-sm text-white">{props.tournament}</p>
        <p className="text-sm text-white">
          {props.date && formatDate(props.date)}
        </p>
      </div>
    </div>
  );
};
