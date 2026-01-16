import type { PagesFunction } from '@cloudflare/workers-types';
import { createOptionsResponse, handleRsvpRequest } from '../../src/lib/rsvp';
import type { RSVPEnv } from '../../src/lib/rsvp';

export interface Env extends RSVPEnv {}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  return handleRsvpRequest(request, env);
};

export const onRequestOptions: PagesFunction = async () => {
  return createOptionsResponse();
};
