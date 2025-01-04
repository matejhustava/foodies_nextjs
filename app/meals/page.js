import MealsGrid from "@/components/meals/meals-grid"
import { getMeals } from "@/lib/meals"
import Link from "next/link"
import { Suspense } from "react";
import classes from "./page.module.css"

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals}></MealsGrid>
} 

export default async function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals you have created{' '}<span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your recipe and cook it yourself. It is easy.
                </p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>Share yout recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals/>
                </Suspense>
            </main>
        </>
    )
}