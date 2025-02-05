import type { TypeOrArrayOf } from '../shared.types';

export interface CommunityV2FieldsParams {
  'community.fields': TypeOrArrayOf<TCommunityV2CommunityField> | string;
}

export type TCommunityV2CommunityField = 'access' | 'created_at' | 'description' | 'id' | 'join_policy' | 'member_count' | 'name';


export interface CommunityV2 {
  id: string;
  name: string;
  created_at: string;
  access?: string;
  join_policy?: string;
  member_count?: number;
  description?: string;
}

export interface CommunityErrorV2 {
    title: string;
    type: string;
    detail?: string;
    status?: number;
}

export interface CommunityV2Result {
  data: CommunityV2;
  errors?: CommunityErrorV2[];
}

export interface CommunitiesV2Result {
  data: CommunityV2[];
  errors?: CommunityErrorV2[];
  meta: {next_token?: string};
}

export interface CommunitySearchV2Params extends CommunityV2FieldsParams {
  query: string;
  max_results?: number;
  next_token?: string;
  pagination_token?: string;
} 