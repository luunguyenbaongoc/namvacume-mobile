import { Token, LoginResponse, RegisterResponse } from "@/types/api/response/auth";
import {
  LogInDto,
  RefreshDto,
  RegisterDto,
  LogOutDto,
} from "../types/api/dto/auth";
import http from "../utils/http";

export const AUTH_URL = {
  REGISTER: "/auth/register",
  LOGIN: "/auth/login",
  LOGOUT: "/auth/logout",
  REFRESH: "/auth/refresh",
  CHECK_USER_EXIST: "/auth/check-user-exist",
};

export const authAPI = {
  register(registerDto: RegisterDto) {
    return http.post<RegisterResponse>(AUTH_URL.REGISTER, registerDto);
  },
  login(loginDto: LogInDto) {
    return http.post<LoginResponse>(AUTH_URL.LOGIN, loginDto);
  },
  logout(logOutDto: LogOutDto) {
    return http.post<boolean>(AUTH_URL.LOGOUT, logOutDto, {
      headers: {
        refresh_token: logOutDto.refresh_token,
      },
    });
  },
  refresh(refreshDto: RefreshDto) {
    return http.post<Token>(AUTH_URL.REFRESH, refreshDto);
  },
  checkUserExist(phone: string) {
    return http.get<boolean>(`${AUTH_URL.CHECK_USER_EXIST}/${phone}`);
  },
  // findAll(params?: FindAllOptionDto) {
  //   return http.post<OptionResponse[]>(OPTIONS_URL.FIND, params);
  // },
  // create(payload: CreateOptionDto) {
  //   return http.post<OptionResponse>(OPTIONS_URL.CREATE, payload);
  // },
  // update(id: string, payload: CreateOptionDto) {
  //   return http.patch<OptionResponse>(`${OPTIONS_URL.UPDATE}/${id}`, payload);
  // },
  // delete(id: string) {
  //   return http.delete<void>(`${OPTIONS_URL.DELETE}/${id}`);
  // },
};
