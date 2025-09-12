<?php
    class RequestHandler{
        const BASEAPIURL = "https://api.unsplash.com";
        private string $envFilePath;

        function __construct()
        {
            $this->envFilePath = dirname(__DIR__, 2) . '/enviroment/.env';
            $this->LoadEnv();
        }

        public function LoadEnv(){
            if (!file_exists($this->envFilePath)) {
                throw new Exception(".env file not found at: " . $this -> envFilePath);
            }

            $lines = file($this->envFilePath, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);

            foreach ($lines as $line) {
                // Ignore comments
                if (str_starts_with(trim($line), '#')) {
                    continue;
                }

                // Split key=value
                [$key, $value] = explode('=', $line, 2);

                // Remove quotes if present
                $value = trim($value, "\"' ");

                // Set as environment variable
                putenv("$key=$value");
                $_ENV[$key] = $value;
                $_SERVER[$key] = $value;
            }
        }

        public function GetRandomImages(int $imageAmount = 30): array{
            $photoApiEndpoint = self::BASEAPIURL . "/photos/random?count=" . $imageAmount;

            $accessKey = $_ENV["access_key"];

            if(!$accessKey){
                throw new Exception("access_key not set in .env file");
            }

            $ch = curl_init($photoApiEndpoint);
            
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, [
                'Authorization: Client-ID ' . $accessKey
            ]);

            $response = curl_exec($ch);
            curl_close($ch);

            $data = json_decode($response, true);

            return $data;
        }

        public function SearchPhoto(int $pageNum = 1, string $searchQuery): array{
            $photoSearchEndpoint = self::BASEAPIURL . "/search/photos?page=" . $pageNum . "&query=" . $searchQuery;

            $accessKey = $_ENV["access_key"];

            if(!$accessKey){
                throw new Exception("access_key not set in .env file");
            }

            $curl = curl_init($photoSearchEndpoint);

            curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($curl, CURLOPT_HTTPHEADER, [
                'Authorization: Client-ID ' . $accessKey
            ]);

            $response = curl_exec($curl);
            curl_close($curl);

            $data = json_decode($response, true);

            return $data;
        }
        
    }

?>