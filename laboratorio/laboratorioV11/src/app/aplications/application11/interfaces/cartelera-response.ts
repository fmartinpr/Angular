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
    backdropPath:     string;
    genreIDS:         number[];
    id:               number;
    originalLanguage: OriginalLanguage;
    originalTitle:    string;
    overview:         string;
    popularity:       number;
    posterPath:       string;
    releaseDate:      Date;
    title:            string;
    video:            boolean;
    voteAverage:      number;
    voteCount:        number;
}

export enum OriginalLanguage {
    En = "en",
    Es = "es",
    Ja = "ja",
}