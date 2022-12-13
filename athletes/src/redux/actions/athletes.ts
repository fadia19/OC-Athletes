import { message } from "antd";
import { Dispatch } from "redux";
import { IAction } from "../../models/shared";
import * as actionTypes from "../constants/athletes";

// export const fetchRolesListBegin = (): IAction => ({
//   type: actionTypes.FETCH_ROLES_LIST_BEGIN,
// });

// export const fetchRolesListSuccess = (roles: Role[]): IAction => ({
//   type: actionTypes.FETCH_ROLES_LIST_SUCCESS,
//   payload: { roles },
// });
// export const fetchRolesListFailure = (): IAction => ({
//   type: actionTypes.FETCH_ROLES_LIST_FAILURE,
// });

// export const fetchRolesList =
//   (domainName: string): Role[] | any =>
//   async (dispatch: Dispatch) => {
//     dispatch(fetchRolesListBegin());
//     try {
//       const rolesList = await fetchRolesListAPI(domainName);
//       const sortedList = rolesList.sort((a: Role, b: Role) =>
//         a.roleName.localeCompare(b.roleName)
//       );
//       dispatch(fetchRolesListSuccess(sortedList));
//     } catch (error: any) {
//       dispatch(fetchRolesListSuccess(error.message));
//       message.error('Unable to load roles list. Please try again later.');
//     }
//   };
