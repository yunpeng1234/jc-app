import { atom, DefaultValue, selector } from 'recoil';

export const nameState = atom({
  key: 'name',
  default: '',
});

export const emailState = atom({
  key: 'email',
  default: '',
});

export const roleState = atom({
  key: 'role',
  default: -1,
});

export const userInfoState = selector({
  key: 'userInfo',
  get: ({ get }) => {
    //get values from individual atoms
    const name = get(nameState);
    const email = get(emailState);
    const role = get(roleState);

    return { name, email, role };
  },
  set: ({ set }, value) => {
    if (!(value instanceof DefaultValue)) {
      set(nameState, value.name);
      set(emailState, value.email);
      set(roleState, value.role);
    }
  },
});

export const signUpEmailState = atom({
  key: 'signUpEmail',
  default: '',
});

export const signUpNameState = atom({
  key: 'signUpName',
  default: '',
});

export const signUpDobState = atom({
  key: 'signUpDob',
  default: '',
});

export const signUpTocState = atom({
  key: 'signUpToc',
  default: false,
});

export const signUpInfoState = selector({
  key: 'signUpInfo',
  get: ({ get }) => {
    const email = get(signUpEmailState);
    const name = get(signUpNameState);
    const dob = get(signUpDobState);
    const toc = get(signUpTocState);
    return { email, name, dob, toc };
  },
  set: ({ set }, value) => {
    if (!(value instanceof DefaultValue)) {
      set(signUpEmailState, value.name);
      set(signUpEmailState, value.email);
      set(signUpDobState, value.dob);
      set(signUpTocState, value.toc);
    }
  },
});

export const idState = atom({
  key: 'id',
  default: '',
});

export const userState = selector({
  key: 'user',
  get: ({ get }) => {
    //get values from individual atoms
    const id = get(idState);
    const name = get(nameState);
    const email = get(emailState);
    const role = get(roleState);

    return { id, name, email, role };
  },
  set: ({ set }, value) => {
    if (!(value instanceof DefaultValue)) {
      set(idState, value.id);
      set(nameState, value.name);
      set(emailState, value.email);
      set(roleState, value.role);
    }
  },
});
