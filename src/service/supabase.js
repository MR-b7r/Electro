import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = `https://jainsgvdrykogsykgarb.supabase.co`;
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImphaW5zZ3Zkcnlrb2dzeWtnYXJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyODIyMTUsImV4cCI6MjAyODg1ODIxNX0.iIE4GsD2bfEKwys-IlR-0C5LGM0jHiFaoqeroDNEfx4`;

const supabase = createClient(supabaseUrl, supabaseKey);
export const supabaseSignup = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storageKey: "newAccount",
  },
});

export default supabase;
