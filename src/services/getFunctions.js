import axios from 'axios';
const URL_JSON_SERVER = "https://cineapp-miniback.onrender.com";
const URL_FUNCTIONS = `${URL_JSON_SERVER}/functions`;
const URL_CINEMAS = `${URL_JSON_SERVER}/cinemas`;

export const getFunctionsWithDetails = async () => {
  try {
    const [functionsResponse, cinemasResponse] = await Promise.all([
      axios.get(URL_FUNCTIONS),
      axios.get(URL_CINEMAS)
    ]);

    const functions = Array.isArray(functionsResponse.data) ? functionsResponse.data : [];
    const cinemas = Array.isArray(cinemasResponse.data) ? cinemasResponse.data : [];

    const functionsWithDetails = functions.map((func) => {
      const cinema = cinemas.find((c) => c.id === func.cinema_id[0]);
      return {
        ...func,
        cinema: cinema || null,
        showtimes: func.showtimes?.map((showtime) => ({
          start_date: new Date(`${showtime.start_date}`), 
          end_date: new Date(`${showtime.end_date}`),     
          time: showtime.time,
          ticketsSold: showtime.tickets_sold,
          totalTickets: showtime.total_tickets,
          availableTickets: showtime.available_tickets,
          seats: Array.from({ length: showtime.total_tickets }, (_, index) => ({
            id: index + 1,
            isOccupied: index < showtime.tickets_sold,
          })),
        })) || [],
      };
    });
   
    return functionsWithDetails;
  } catch (error) {
    console.error('Error obteniendo los detalles de las funciones:', error);
    return [];
  }
};
