/*
  # Initial Schema for Agricultural Advisory System

  1. New Tables
    - `profiles`
      - User profile information including language preference and farm details
    - `farms`
      - Farm details including location, size, and soil characteristics
    - `crop_history`
      - Historical data of crops planted and yields
    - `resource_usage`
      - Tracking of water, fertilizer, and pesticide usage
    - `market_prices`
      - Local market price data for different crops
    - `weather_data`
      - Weather forecasts and historical data
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to access their own data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  phone_number text UNIQUE,
  preferred_language text DEFAULT 'en',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create farms table
CREATE TABLE IF NOT EXISTS farms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id uuid REFERENCES profiles(id) NOT NULL,
  name text NOT NULL,
  location_lat decimal NOT NULL,
  location_lng decimal NOT NULL,
  size_hectares decimal NOT NULL,
  soil_type text NOT NULL,
  soil_ph decimal,
  water_source text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create crop_history table
CREATE TABLE IF NOT EXISTS crop_history (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farm_id uuid REFERENCES farms(id) NOT NULL,
  crop_name text NOT NULL,
  planting_date date NOT NULL,
  harvest_date date,
  yield_kg decimal,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create resource_usage table
CREATE TABLE IF NOT EXISTS resource_usage (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farm_id uuid REFERENCES farms(id) NOT NULL,
  resource_type text NOT NULL,
  amount decimal NOT NULL,
  unit text NOT NULL,
  date date NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now()
);

-- Create market_prices table
CREATE TABLE IF NOT EXISTS market_prices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  crop_name text NOT NULL,
  price_per_kg decimal NOT NULL,
  market_location text NOT NULL,
  date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create weather_data table
CREATE TABLE IF NOT EXISTS weather_data (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  farm_id uuid REFERENCES farms(id) NOT NULL,
  date date NOT NULL,
  temperature_max decimal,
  temperature_min decimal,
  precipitation_mm decimal,
  humidity_percent decimal,
  wind_speed_kmh decimal,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE farms ENABLE ROW LEVEL SECURITY;
ALTER TABLE crop_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE resource_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE market_prices ENABLE ROW LEVEL SECURITY;
ALTER TABLE weather_data ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can read own farms"
  ON farms FOR SELECT
  TO authenticated
  USING (profile_id = auth.uid());

CREATE POLICY "Users can insert own farms"
  ON farms FOR INSERT
  TO authenticated
  WITH CHECK (profile_id = auth.uid());

CREATE POLICY "Users can read own crop history"
  ON crop_history FOR SELECT
  TO authenticated
  USING (farm_id IN (
    SELECT id FROM farms WHERE profile_id = auth.uid()
  ));

CREATE POLICY "Users can read own resource usage"
  ON resource_usage FOR SELECT
  TO authenticated
  USING (farm_id IN (
    SELECT id FROM farms WHERE profile_id = auth.uid()
  ));

CREATE POLICY "Market prices are readable by all authenticated users"
  ON market_prices FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Weather data is readable by farm owners"
  ON weather_data FOR SELECT
  TO authenticated
  USING (farm_id IN (
    SELECT id FROM farms WHERE profile_id = auth.uid()
  ));