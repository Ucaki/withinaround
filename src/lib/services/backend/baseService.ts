


type FindManyFn = (...args: [unknown?]) => Promise<unknown>;
type FindUniqueFn = (...args: [unknown]) => Promise<unknown>;

// Constrain TDelegate to something that has at least findMany and findUnique
export class BaseService<
  TDelegate extends {
    findMany: FindManyFn;
    findUnique: FindUniqueFn;
  }
> {
  protected model: TDelegate;

  constructor(model: TDelegate) {
    this.model = model;
  }

  async findMany(args?: Parameters<TDelegate["findMany"]>[0]) {
    return this.model.findMany(args ?? {});
  }

  async findUnique(args: Parameters<TDelegate["findUnique"]>[0]) {
    return this.model.findUnique(args);
  }
}


/*
export class BaseService<
  TDelegate extends PrismaClient["workshop"]
> {
  protected model: TDelegate;

  constructor(model: TDelegate) {
    this.model = model;
  }
  async findAll(args?: Parameters<TDelegate["findMany"]>[0]) {
    return this.model.findMany(args ?? {});
  }
  async findById(args: Parameters<TDelegate["findUnique"]>[0]) {
    return this.model.findUnique({ ...args });
  }
}
*/

//Ovo deluje kao da radi
/*
export class BaseService<
  TDelegate extends {
    findMany: (...args: unknown[]) => unknown;
    findUnique: (...args: unknown[]) => unknown;
  }>

  export class BaseService<TDelegate extends {
  findMany: (...args: any[]) => any;
  findUnique: (...args: any[]) => any;
  create: (...args: any[]) => any;
  update: (...args: any[]) => any;
  delete: (...args: any[]) => any;
}>

*/

































//constructor(modelName: TModelName) {
//    this.model = prisma[modelName] as unknown as TDelegate;
//  }

  /*async create(args: Parameters<TDelegate["create"]>[0]) {
    return this.model.create({ args });
  }

  async update(
    where: Parameters<TDelegate["update"]>[0]["where"],
    data: Parameters<TDelegate["update"]>[0]["data"]
  ) {
    return this.model.update({ where, data });
  }

  async delete(where: Parameters<TDelegate["delete"]>[0]["where"]) {
    return this.model.delete({ where });
  }*/

/*
export class BaseService<
  TModelName extends keyof PrismaClient,

> {
  protected model: {
    findMany: (...args: any[]) => any;
    findUnique: (...args: any[]) => any;
    create: (...args: any[]) => any;
    update: (...args: any[]) => any;
    delete: (...args: any[]) => any;
  };

  constructor(modelName: TModelName) {
    this.model = prisma[modelName] as unknown as {
      findMany: (...args: any[]) => any;
      findUnique: (...args: any[]) => any;
      create: (...args: any[]) => any;
      update: (...args: any[]) => any;
      delete: (...args: any[]) => any;
    };
  }

  async findAll(args?: any): Promise<any> {
    return this.model.findMany(args);
  }

  async findById(where: any): Promise<any> {
    return this.model.findUnique({ where });
  }

  async create(data: any): Promise<any> {
    return this.model.create({ data });
  }

  async update(where: any, data: any): Promise<any> {
    return this.model.update({ where, data });
  }

  async delete(where: any): Promise<any> {
    return this.model.delete({ where });
  }
}
*/

/*
type CreateArgs<TDelegate> = Parameters<Extract<TDelegate, { create: any }>["create"]>[0];
type UpdateArgs<TDelegate> = Parameters<Extract<TDelegate, { update: any }>["update"]>[0];
type FindManyArgs<TDelegate> = Parameters<Extract<TDelegate, { findMany: any }>["findMany"]>[0];

export class BaseService<TModelName extends keyof PrismaClient, TDelegate = PrismaClient[TModelName]>{

    protected model: TDelegate;
    constructor(modelName: TModelName) {
        this.model = prisma[modelName] as TDelegate;
    }
    async findAll(args?: FindManyArgs<TDelegate>) {
        return (this.model as any).findMany(args ?? {});
    }

    async findById(id: string | number) {
        return (this.model as any).findUnique({ where: { id } });
    }

    async create(data: CreateArgs<TDelegate> extends { data: infer D } ? D : never) {
        return (this.model as any).create({ data });
    }

    async update(
        id: string | number,
        data: UpdateArgs<TDelegate> extends { data: infer D } ? D : never
    ) {
        return (this.model as any).update({ where: { id }, data });
    }

    async delete(id: string | number) {
        return (this.model as any).delete({ where: { id } });
    }
}
*/

 /* async findAll(args?: Parameters<TDelegate["findMany"]>[0]) {
    return this.model.findMany(args ? args : undefined);
    
  }
async findAll(args?: Parameters<TDelegate["findMany"]>[0]) {
    if (args === undefined) {
      return this.model.findMany();
    }
    return this.model.findMany(args);
  }*/