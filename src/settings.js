const PROTOCOL = 'http';
const HOST = 'localhost:8080';
const API_VERSION = 'v4';
export const API_TOKEN = "157b2a6db37f4d708f6bb84ee47652fa"
export const CURRENT_SEASON = 20
export const DEFAULT_SHOW_COUNT = 20
export const DEFAULT_SHOW_STEP = 20
export const EARLIE_SEASON = 20

const PLAN = 'TIER_ONE';
const AREAS = '2077';

const BASE = `${PROTOCOL}://${HOST}/${API_VERSION}`;

export function getCompetitionsUrl() {
    return `${BASE}/competitions/?areas=${AREAS}&plan=${PLAN}`;
}

export function getTeamsUrl(competitionId, season) {
    let url = `${BASE}/competitions/${competitionId}/teams`;
    if (season) url += `/?season=${season}`;
    return url;
}

export function getCompetitionCalendarUrl(competitionId, season, dateFrom, dateTo) {
    let url = `${BASE}/competitions/${competitionId}/matches`;
    if (season) {
        let params = new URLSearchParams();
        params.append('season', season);
        url += `/?${params.toString()}`;
    }
    return url;
}

export function getTeamCalendarUrl(teamId) {
    return `${BASE}/teams/${teamId}/matches`;
}

export function getCompetitionUrl(competitionId) {
    return `${BASE}/competitions/${competitionId}`;
}

export function getTeamUrl(teamId) {
    return `${BASE}/teams/${teamId}`;
}
