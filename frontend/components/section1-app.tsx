export default function Section1({ data }: { data: any }) {
    return (
        <>
            <section className='flex flex-col'>
                <span>{JSON.stringify(data, null, 2)}</span>
            </section>
        </>
    );
}
