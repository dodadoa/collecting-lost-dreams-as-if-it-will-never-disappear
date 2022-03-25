use anyhow::Result;
use csv::Reader;
use std::fs;

pub fn get_chart() -> Result<()> {
    let contents =
        fs::read_to_string("src/data/chart.csv").expect("Something went wrong reading the file");

    let mut rdr = Reader::from_reader(contents.as_bytes());
    for result in rdr.records() {
        let record = result?;
        println!("{:?}", record);
    }

    Ok(())
}
