import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../types";

interface MoviesState {
  data: Movie[]
}

const initialState: MoviesState = {
  data: [
    {
      id: 1,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/10893610/2cce4627-1099-477e-a2ec-a0025cb1fea4/300x450",
      title: "Вонка (2023)",
      genre: "мюзикл, фэнтези, комедия, приключения, семейный",
      actors: ["Тимоти Шаламе", "Колин О’Брайэн", "Кала Лэйн", "Кигэн-Майкл Ки", "Пэтерсон Джозеф", "Мэтт Лукас", "Мэтью Бэйнтон", "Салли Хокинс", "Роуэн Эткинсон", "Оливия Колман"],
      country: ["США", "Великобритания", "Канада"],
      description: "История будет сосредоточена конкретно на молодом Вилли Вонка и на том, как он встретил умпа-лумпа во время одного из своих первых приключений.Мечтая открыть магазин в городе, известном своим шоколадом, молодой и бедный Вилли Вонка обнаруживает, что индустрией управляет картель жадных шоколатье.",
      duration: 83,
      premier: "7 сентября 2023",
      year: 2022,
      times: ["10:00", "12:30", "14:30", "16:30", "20:30", "22:30"]
    },
    {
      id: 2,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/267d21f1-c7ae-4077-bd95-6c26a39418a0/300x450",
      title: "Бедные-Несчастные",
      genre: "фантастика, драма, мелодрама, комедия",
      actors: ["Эмма Стоун", "Уиллем Дефо", "Рами Юссеф","Марк Руффало","Вики Пеппердин","Джек Бартон","Чарли Хискок" ],
      country: ["Великобритания", "США", "Ирландия", "Венгрия"],
      description: "Из-за жестокого мужа Белла Бакстер покончила с собой, утопившись в реке. Эксцентричный учёный решает спасти женщину и пересаживает ей мозг её же нерождённого ребёнка.",
      duration: 141,
      premier: "1 сентября 2023",
      year: 2023,
      times: ["11:00","12:30","14:00","16:00", "20:30"]
     
    },
    {
      id: 3,
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/9784475/26deff5f-9980-4a19-b928-31820c628913/300x450",
      title: "Девушка Миллера",
      genre: "комедия, драма", 
      actors: ["Мартин Фриман","Дженна Ортега","Башир Салахуддин","Гидеон Адлон","Дагмара Доминчик","Кристин Адамс","Августин Харгрейв"],
      country: ["США"],
      description: "История непростых отношений между учителем литературы и его студенткой.",
      duration: 93,
      premier: "11 января 2024",
      year: 2024,
      times: ["10:30","12:00","14:30","16:30","18:30","20:30","23:00"]}
  ]
}

const moviesSlice = createSlice({
  name: 'moviesSlice',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setMovies } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
