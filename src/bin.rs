use my_protobuf_project::mycompany;

fn main() {
    let account = mycompany::accounts::v1::Account {
        account_id: uuid::Uuid::new_v4().to_string(),
        email: String::from("account1@example.com"),
        ..Default::default()
    };
    println!("account = {:?}", account);
}
