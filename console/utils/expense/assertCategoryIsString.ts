export default function assertCategoryIsString(category: any): asserts category is string {
   if (typeof category !== "string") {
      throw new Error("Category must be string")
   }
}
