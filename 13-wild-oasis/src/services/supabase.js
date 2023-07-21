import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ehjjdkcpoemhywphojmq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoampka2Nwb2VtaHl3cGhvam1xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2MDgwOTIsImV4cCI6MjAwNTE4NDA5Mn0.5r-zbDOk2F-996DAJzLBqU1ZEjfxq202k_Q6OzFQK5Q";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
