export const Toast = {
    POSITION: 'top-center',
    AUTO_CLOSE_TIME: 3000,
    TOO_SHORT_REQUEST_ERROR: 'Please type more than 3 letters',
    LOADING_DATA_ERROR: 'Something went wrong. Please try again later',
    API_RATE_LIMIT_EXCEEDED_ERROR: 'Requests exceeded. Please wait',
};

export const ToastSetting = {
    position: Toast.POSITION,
    autoClose: Toast.AUTO_CLOSE_TIME,
}

export const MIN_SEARCH_REQUEST_LENGTH = 3;
export const FUNCTION_CALL_TIME_DELAY = 2000;

export const AppRoute = {
    MAIN_PAGE: '/',
    ABOUT: '/about',
}