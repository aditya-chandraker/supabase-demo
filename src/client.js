import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://rxhuhxvfgtnqbgnibnjy.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aHVoeHZmZ3RucWJnbmlibmp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjY5MTA2NDMsImV4cCI6MTk4MjQ4NjY0M30.dOJj9yPStdZiiVzLTKiOISTwUnPj2xsDFa98R8K2jqI'
);
