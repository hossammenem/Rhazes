import {
  nonNull,
  objectType,
  stringArg,
  extendType,
  enumType,
  list,
  queryField,
  mutationField,
} from "nexus";

export const Schedule = objectType({
  name: "Schedule",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("OppLogo");
    t.nonNull.string("OppName");
    t.nonNull.string("tournament");
    t.nonNull.field("matchType", { type: matchType });
    t.nonNull.string("date");
    t.nonNull.string("matchResults");
    t.int("recordNumber");
  },
});

const matchType = enumType({
  name: "matchType",
  members: ["Bo1", "Bo3", "Bo5"],
});

export const latestMatches = queryField("latestMatches", {
  type: list(Schedule),
  resolve: async (root, args, ctx) => {
    return await ctx.prisma.schedule.findMany({
      orderBy: {
        recordNumber: "desc",
      },
      take: 3,
    });
  },
});

export const createMatchMutation = mutationField("createMatchMutation", {
  type: Schedule,
  args: {
    OppLogo: stringArg(),
    OppName: stringArg(),
    tournament: stringArg(),
    matchType: stringArg(),
    date: stringArg(),
    matchResults: stringArg(),
  },
  resolve: async (root, args, ctx) => {
    const newMatch = {
      OppLogo: args.OppLogo,
      OppName: args.OppName,
      tournament: args.tournament,
      matchType: args.matchType,
      date: args.date,
      matchResults: args.matchResults,
    };
    return await ctx.prisma.schedule.create({
      data: newMatch,
    });
  },
});
