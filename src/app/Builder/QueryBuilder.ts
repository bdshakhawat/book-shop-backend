
import { FilterQuery, Query } from 'mongoose';

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }
  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm;
    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      });
    }
    return this;
  }
  filter() {
    const queryObject = { ...this.query };
    const excludedFields = ['searchTerm', 'page', 'limit', 'sort'];
    excludedFields.forEach((field) => delete queryObject[field]);
    if (queryObject.minPrice && queryObject.maxPrice) {
      queryObject.price = {
        $gte: Number(queryObject.minPrice),
        $lte: Number(queryObject.maxPrice),
      };
      delete queryObject.minPrice;
      delete queryObject.maxPrice;
    }
    this.modelQuery = this.modelQuery.find(queryObject as FilterQuery<T>);
    return this;
  }
  limit() {
    this.modelQuery = this.modelQuery.limit(Number(this?.query?.limit));
    return this;
  }

  countTotal() {
    const totalQueries = this.modelQuery.getFilter();
    const totalDocuments = this.modelQuery.model.countDocuments(totalQueries);
    return totalDocuments;
  }
}

export default QueryBuilder;




// <<<<<<< HEAD

// =======
// import { FilterQuery, Query } from 'mongoose'

// class QueryBuilder<T> {
//   public modelQuery: Query<T[], T>
//   public query: Record<string, unknown>
//   constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
//     this.modelQuery = modelQuery
//     this.query = query
//   }

//   search(searchableFields: string[]) {
//     const searchTerm = this?.query?.searchTerm
//     if(searchTerm){
//       this.modelQuery = this.modelQuery.find({
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         $or: searchableFields.map((field: any) => ({
//           [field]: { $regex: searchTerm, $options: 'i' },
//         })),
//       } as FilterQuery<T>)
//     }

//     return this
//   }

//   filter() {
//     const queryObj = { ...this.query }
//     const excludingImportant = [
//       'searchTerm',
//       'page',
//       'limit',
//       'sortOrder',
//       'sortBy',
//       'fields',
//     ]

//     // jesob field amdr filtering a drkr nei sesob baad dicchi
//     excludingImportant.forEach((key) => delete queryObj[key])

//     this.modelQuery = this.modelQuery.find(queryObj);

//     return this;
//   }

//   paginate() {
//     const page = Number(this?.query?.page) || 1
//     const limit = Number(this?.query?.limit) || 10
//     // skip = (page-1)*limit
//     const skip = (page - 1) * limit

//     this.modelQuery = this.modelQuery.skip(skip).limit(limit)

//     return this
//   }

//   sort() {
//     let sortStr

//     if (this?.query?.sortBy && this?.query?.sortOrder) {
//       const sortBy = this?.query?.sortBy
//       const sortOrder = this?.query?.sortOrder
//       // "-price" othoba "price"
//       sortStr = `${sortOrder === 'dsc' ? '-' : ''}${sortBy}`
//     }

//     this.modelQuery = this.modelQuery.sort(sortStr)

//     return this
//   }

//   select() {
//     let fields = '-__v'

//     if (this?.query?.fields) {
//       fields = (this?.query.fields as string)?.split(',').join(' ')
//     }

//     this.modelQuery = this.modelQuery.select(fields)

//     return this
//   }
// }


// export default QueryBuilder;
// >>>>>>> 95ef0f1f028cbfe67eadf131d50d63c9ac6704ac
