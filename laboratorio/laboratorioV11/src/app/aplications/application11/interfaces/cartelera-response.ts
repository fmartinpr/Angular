export interface CarteleraResponse {
    dates:        Dates;
    page:         number;
    results:      Movie[];
    totalPages:   number;
    totalResults: number;
}

export interface Dates {
    maximum: Date;
    minimum: Date;
}

export interface Movie {
    adult:            boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:               number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:         string;
    popularity:       number;
    poster_path:       string;
    release_date:      Date;
    title:            string;
    video:            boolean;
    vote_average:      number;
    vote_count:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}