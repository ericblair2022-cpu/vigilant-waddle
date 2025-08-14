import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://mivyboocreibzdftnmmj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdnlib29jcmVpYnpkZnRubW1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3MTcyNDMsImV4cCI6MjA2ODI5MzI0M30.1x5s0Ry5xubDEEytLPutbU2aUqQ_YRIPo9i5CIjmJVo';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };