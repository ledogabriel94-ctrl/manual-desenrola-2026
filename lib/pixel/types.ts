export const META_FUNNEL_EVENTS = [
  "PageView",
  "ViewContent",
  "Lead",
  "InitiateCheckout",
  "AddToCart",
  "AddPaymentInfo",
  "Purchase",
] as const;

export const META_AUX_EVENTS = [
  "ButtonClick",
  "ScrollDepth",
  "Contact",
  "Subscribe",
  "CompleteRegistration",
  "Search",
] as const;

export type FunnelEventName = (typeof META_FUNNEL_EVENTS)[number];
export type AuxEventName = (typeof META_AUX_EVENTS)[number];
export type MetaEventName = FunnelEventName | AuxEventName;

export type ContentType = "product" | "product_group";

export interface ContentItem {
  id: string;
  quantity?: number;
  item_price?: number;
}

export interface BaseEventParams {
  content_ids?: string[];
  content_name?: string;
  content_type?: ContentType;
  content_category?: string;
  contents?: ContentItem[];
  value?: number;
  currency?: string;
  num_items?: number;
  search_string?: string;
  status?: string;
  predicted_ltv?: number;
}

export interface CustomEventParams extends BaseEventParams {
  [key: string]: unknown;
}

export interface ServerUserData {
  external_id?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbp?: string;
  fbc?: string;
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
  ct?: string;
  st?: string;
  zp?: string;
  country?: string;
}

export interface CapiPayload {
  event_name: MetaEventName | string;
  event_time: number;
  event_id: string;
  event_source_url?: string;
  action_source: "website";
  user_data: ServerUserData;
  custom_data?: CustomEventParams;
}
