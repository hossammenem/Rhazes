"use client";
import { gql, useMutation } from "@apollo/client";
import { useAtom } from "jotai";
import { matchAtom, initMatch } from "../store";

interface IFormProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler;
}

const createMatchMutation = gql`
  mutation Mutation(
    $oppLogo: String
    $oppName: String
    $tournament: String
    $matchType: String
    $matchResults: String
    $date: String
  ) {
    createMatch(
      OppLogo: $oppLogo
      OppName: $oppName
      tournament: $tournament
      matchType: $matchType
      matchResults: $matchResults
      date: $date
    ) {
      OppLogo
      OppName
      tournament
      matchType
      date
      matchResults
      id
    }
  }
`;

export default function Form() {
  const [state, setState] = useAtom(matchAtom);
  const MatchRes = "".concat(state.ourRes, ":", state.OppRes);
  const [createMatch] = useMutation(createMatchMutation, {
    variables: {
      oppLogo: state.OppName,
      oppName: state.OppName,
      tournament: state.tournament,
      matchType: state.matchType,
      matchResults: MatchRes,
      date: new Date(state.date),
    },
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(state)
      createMatch();
    } catch (error) {
      console.log(error);
    }
    setState(initMatch);
  };

  return (
    <form
      className="mx-auto flex w-screen max-w-3xl flex-col gap-6"
      onSubmit={handleOnSubmit}
    >
      <div className="mx-auto flex flex-row gap-6">
        <NumircInput
          name="ourRes"
          value={state.ourRes}
          onChange={handleOnChange}
        />
        <div className="text-5xl">:</div>
        <NumircInput
          name="OppRes"
          value={state.OppRes}
          onChange={handleOnChange}
        />
      </div>
      <div className="mx-auto flex w-screen max-w-3xl flex-row justify-center gap-6">
        <div className="wrapper h-10 w-14">
          <select
            className="cut-corners appearance-none"
            name="matchType"
            onChange={handleOnChange}
            value={state.matchType}
          >
            <option value="Bo1">Bo1</option>
            <option value="Bo3">Bo3</option>
            <option value="Bo5">Bo5</option>
          </select>
        </div>
      </div>
      <div className="mx-auto flex w-screen max-w-3xl flex-row justify-center gap-3">
        <TextInput
          value={state.tournament}
          onChange={handleOnChange}
          name="tournament"
          placeholder="Tournament Name"
        />
        <div className="wrapper h-12 w-14">
          <input
            type="datetime-local"
            className="cut-corners text-lg"
            style={{padding: "16px"}}
            value={state.date}
            onChange={handleOnChange}
            name="date"
          />
        </div>
      </div>
      <div className="mx-auto flex w-full justify-center">
        <TextInput
          value={state.OppName}
          onChange={handleOnChange}
          name="OppName"
          placeholder="Opponent Name"
        />
      </div>
      <div className="flex flex-row p-4">
        <button className="button h-12 w-36 px-8 text-2xl font-bold text-white">
          Submit
        </button>
        <button
          className="button ml-auto h-12 w-36 px-8 text-2xl font-bold text-white"
          onClick={() => {
            setState(initMatch);
          }}
        >
          Reset
        </button>
      </div>
    </form>
  );
}

const NumircInput = (props: IFormProps) => {
  return (
    <div className="wrapper h-16 w-12">
      <input
        type="number"
        className="cut-corners text-center text-lg"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

const TextInput = (props: IFormProps) => {
  return (
    <div className="wrapper h-12 w-full max-w-[18rem]">
      <input
        type="text"
        placeholder={props.placeholder}
        className="cut-corners text-lg"
        value={props.value}
        onChange={props.onChange}
        name={props.name}
      />
    </div>
  );
};
